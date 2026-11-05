import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { Toast } from '../ui/Toast';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/SocialIcons';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    triggerToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      triggerToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message (User can hook this up to Formspree, Resend, or EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Confetti celebration burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      triggerToast("Thank you! Your message has been sent successfully.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Twitter':
        return <TwitterIcon className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Get in Touch"
          title="Let's Build Something Great"
          subtitle="Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-400" />
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Feel free to reach out directly through email, phone, or connect on social platforms.
              </p>

              {/* Info Items */}
              <div className="space-y-4">
                
                {/* Email with 1-click copy */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-slate-500 font-medium">Email Me</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-teal-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-teal-300 transition-colors ml-2 shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Availability status */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Current Status</p>
                    <p className="text-xs sm:text-sm font-semibold text-teal-400">{personalInfo.availability}</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                  Connect on Socials
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-medium transition-all"
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the details below and I will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Discussion / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or query..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Feedback Toast */}
      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </section>
  );
};
