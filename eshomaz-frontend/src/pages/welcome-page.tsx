import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Lock, Sparkles } from 'lucide-react';

export const WelcomePage = () => {
    const { login, isLoading } = useKindeAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br dark:bg-black from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        
        <div className="max-w-4xl w-full">
            <div className="text-center space-y-8 p-8 bg-white/70 rounded-2xl backdrop-blur-sm shadow-xl">
                <div className="inline-flex p-3 bg-blue-100 rounded-full">
                <Sparkles className="h-8 w-8 text-blue-600" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to eShomaz
                    </h1>
                    <p className="text-xl text-gray-600">
                        Join thousands of users who trust our platform
                    </p>
                </div>

                <button
                    onClick={() => login()}
                    disabled={isLoading}
                    className="group inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform transition-all hover:-translate-y-0.5"
                >
                    <Lock className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                    Sign In to Continue
                </button>
            </div>
        </div>

    </div>
    )
};