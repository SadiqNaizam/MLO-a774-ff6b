import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';

// Define the validation schema for the form
const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  className?: string;
  onLoginSuccess?: (data: LoginFormValues) => void; 
  onSignUp?: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSuccess, onSignUp }) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    console.log('Login form submitted:', values);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    if (onLoginSuccess) {
      onLoginSuccess(values);
    }
    // Example: form.reset(); // Optionally reset form on success
  };

  const handleSignUpClick = React.useCallback(() => {
    if (onSignUp) {
      onSignUp();
    } else {
      console.log('Sign up clicked');
      // Default behavior if no handler is provided, e.g., navigate or show modal
    }
  }, [onSignUp]);

  return (
    <div className={cn('w-full flex flex-col gap-6', className)}>
      <h1 className="text-3xl font-bold text-card-foreground text-left">
        Log in
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your username" 
                    {...field} 
                    className="bg-card border-input text-card-foreground placeholder:text-muted-foreground"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="bg-card border-input text-card-foreground placeholder:text-muted-foreground"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Log in
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center text-muted-foreground">
        or,{' '}
        <button
          type="button"
          onClick={handleSignUpClick}
          className="font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-card rounded-sm disabled:opacity-50"
          disabled={isSubmitting}
        >
          sign up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
