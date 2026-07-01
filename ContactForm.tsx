/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";

interface MessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<MessageData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [messagesList, setMessagesList] = useState<MessageData[]>(() => {
    const saved = localStorage.getItem("portfolio_messages");
    return saved ? JSON.parse(saved) : [];
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("submitting");

    // Simulate reliable API post
    setTimeout(() => {
      const updatedList = [...messagesList, formData];
      setMessagesList(updatedList);
      localStorage.setItem("portfolio_messages", JSON.stringify(updatedList));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const resetForm = () => {
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase">Get In Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Contact & Collaboration
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <h4 className="text-xl font-display font-bold text-white tracking-tight">
                Let's Discuss Opportunities
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you have a vacancy, an open-source collaboration idea, or an IoT project that needs structuring, feel free to send a line! I will get back to you promptly.
              </p>
            </div>

            {/* Quick Contact Info Block */}
            <div className="space-y-4 pt-2">
              <div className="p-5 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl flex items-center gap-4 transition-all group">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl group-hover:bg-blue-500/20 transition-all">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="p-5 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl flex items-center gap-4 transition-all group">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl group-hover:bg-cyan-500/20 transition-all">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Phone Number</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="p-5 bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 rounded-2xl flex items-center gap-4 transition-all group">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl group-hover:bg-indigo-500/20 transition-all">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Location</span>
                  <span className="text-sm font-medium text-zinc-300">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Local persistence message log badge */}
            {messagesList.length > 0 && (
              <div className="p-4 bg-zinc-900/20 border border-zinc-850 rounded-2xl flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-zinc-500">
                  You have submitted <strong className="text-white">{messagesList.length}</strong> test messages locally.
                </span>
              </div>
            )}
          </div>

          {/* Column 2: Minimalist Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/40 border border-zinc-850 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
                      <CheckCircle2 className="w-16 h-16 text-green-400 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-display font-bold text-white">Message Transmitted!</h4>
                      <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                        Thank you for reaching out. The message details were compiled and stored in your browser's local sandbox safely.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded-xl transition-all cursor-pointer focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-container"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="relative">
                        <label
                          htmlFor="contact-name"
                          className={`absolute left-4 transition-all duration-300 font-mono pointer-events-none ${
                            activeField === "name" || formData.name
                              ? "top-1 text-[10px] text-blue-400 font-semibold"
                              : "top-4 text-xs sm:text-sm text-zinc-500"
                          }`}
                        >
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-850 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 text-xs sm:text-sm rounded-xl px-4 pt-5 pb-3 transition-colors focus:outline-none"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <label
                          htmlFor="contact-email"
                          className={`absolute left-4 transition-all duration-300 font-mono pointer-events-none ${
                            activeField === "email" || formData.email
                              ? "top-1 text-[10px] text-blue-400 font-semibold"
                              : "top-4 text-xs sm:text-sm text-zinc-500"
                          }`}
                        >
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-zinc-850 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 text-xs sm:text-sm rounded-xl px-4 pt-5 pb-3 transition-colors focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <label
                        htmlFor="contact-subject"
                        className={`absolute left-4 transition-all duration-300 font-mono pointer-events-none ${
                          activeField === "subject" || formData.subject
                            ? "top-1 text-[10px] text-blue-400 font-semibold"
                            : "top-4 text-xs sm:text-sm text-zinc-500"
                        }`}
                      >
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onFocus={() => handleFocus("subject")}
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-850 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 text-xs sm:text-sm rounded-xl px-4 pt-5 pb-3 transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label
                        htmlFor="contact-message"
                        className={`absolute left-4 transition-all duration-300 font-mono pointer-events-none ${
                          activeField === "message" || formData.message
                            ? "top-1 text-[10px] text-blue-400 font-semibold"
                            : "top-4 text-xs sm:text-sm text-zinc-500"
                        }`}
                      >
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-850 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 text-xs sm:text-sm rounded-xl px-4 pt-5 pb-3 transition-colors focus:outline-none resize-none"
                      />
                    </div>

                    {/* Error Alerts */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Please fill in all required fields (Name, Email, Message).</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      id="contact-submit-btn"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 select-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Securely...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
