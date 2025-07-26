import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const EmailTestPanel = () => {
  const [testEmail, setTestEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    details?: any;
  } | null>(null);

  const testEmailService = async () => {
    if (!testEmail || !testEmail.includes('@')) {
      setResult({
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Check if environment variables are configured
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setResult({
        success: false,
        message: 'Supabase environment variables are not configured. Please check your .env file.',
        details: {
          VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL ? 'Configured' : 'Missing',
          VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Configured' : 'Missing'
        }
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/test-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          testEmail: testEmail,
          testType: 'customer'
        })
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          success: true,
          message: `✅ Test email sent successfully to ${testEmail}!`,
          details: data
        });
      } else {
        setResult({
          success: false,
          message: `❌ Failed to send test email: ${data.error}`,
          details: data
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: `❌ Error testing email service: ${error.message}`,
        details: error
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Mail className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Email Service Test</h2>
          <p className="text-gray-600">Test the EmailJS integration to ensure emails are working</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="testEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Test Email Address
          </label>
          <input
            type="email"
            id="testEmail"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="Enter your email to receive a test message"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={testEmailService}
          disabled={isLoading || !testEmail}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              <span>Sending Test Email...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Test Email</span>
            </>
          )}
        </button>

        {result && (
          <div className={`p-4 rounded-xl border-2 ${
            result.success 
              ? 'border-green-200 bg-green-50' 
              : 'border-red-200 bg-red-50'
          }`}>
            <div className="flex items-start space-x-3">
              {result.success ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`font-medium ${
                  result.success ? 'text-green-800' : 'text-red-800'
                }`}>
                  {result.message}
                </p>
                {result.details && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                      View Details
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto max-h-40">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">What this test does:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Validates your EmailJS configuration</li>
            <li>• Tests the email template with sample data</li>
            <li>• Sends a test appointment confirmation email</li>
            <li>• Verifies the email delivery system is working</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailTestPanel;