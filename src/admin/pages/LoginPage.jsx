import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // simulate server delay (1.5 seconds)
    setTimeout(() => {
      if (password === 'admin123') {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid password');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/Fire.jpg"
        alt="Fire"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative bg-white/20 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-sm space-y-6 z-10"
      >
        <h1 className="text-2xl font-bold text-white text-center">Admin Login</h1>

        {error && <p className="text-red-400 text-center">{error}</p>}

        {/* Password Field */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-white/50 rounded-lg py-3 pl-10 pr-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            disabled={loading}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : null}
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
