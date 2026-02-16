"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function DrManivelClinicWebsite() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    doctor: "Dr. T. Manivel",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);

      const clinicWhatsAppNumber = "919080426803";
      const clinicEmail = "drmanivelclinic@gmail.com";

      const plainMessage = language === "en"
        ? `Appointment Request

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Doctor: ${formData.doctor}
Reason: ${formData.message}`
        : `நேரம் பதிவு கோரிக்கை

பெயர்: ${formData.name}
தொலைபேசி: ${formData.phone}
தேதி: ${formData.date}
மருத்துவர்: ${formData.doctor}
காரணம்: ${formData.message}`;

      const encodedMessage = encodeURIComponent(plainMessage);

      // WhatsApp
      const whatsappURL = `https://wa.me/${clinicWhatsAppNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      // Email Backup
      const mailtoURL = `mailto:${clinicEmail}?subject=${encodeURIComponent("New Appointment Request")}&body=${encodedMessage}`;
      setTimeout(() => {
        window.location.href = mailtoURL;
      }, 1000);

      alert(language === "en"
        ? "Redirecting to WhatsApp and Email..."
        : "வாட்ஸ்அப் மற்றும் மின்னஞ்சலுக்கு மாற்றப்படுகிறது...");

      setFormData({
        name: "",
        phone: "",
        date: "",
        doctor: "Dr. T. Manivel",
        message: ""
      });
    } catch (error) {
      alert(language === "en"
        ? "Unable to process appointment."
        : "நேரம் பதிவு செய்ய முடியவில்லை.");
    } finally {
      setLoading(false);
    }
  };

  const content = {
    en: {
      clinicName: "DR MANIVEL CLINIC",
      about: "About",
      services: "Services",
      contact: "Contact",
      heroTitle: "Your health is our priority.",
      heroDesc: "",
      book: "Book Appointment",
      doctors: "Our Doctors",
      aboutClinic: "About the Clinic",
      aboutText:
        "Dr. Manivel Clinic focuses on preventive and comprehensive master health checkups. Our motto is 'Prevention is better than cure.'",
      servicesList: [
        "General Consultation",
        "Cardiology Services",
        "Diabetes & Hypertension Care",
        "Preventive Health Checkups",
        "Laboratory Services",
        "Emergency Care"
      ],
      contactUs: "Contact Us",
      appointment: "Online Appointment",
      name: "Full Name",
      phone: "Phone Number",
      date: "Preferred Date",
      selectDoctor: "Select Doctor",
      message: "Reason for Visit",
      submit: "Submit"
    },
    ta: {
      clinicName: "டாக்டர் மணிவேல் கிளினிக்",
      about: "எங்களை பற்றி",
      services: "சேவைகள்",
      contact: "தொடர்பு",
      heroTitle: "உங்கள் ஆரோக்கியம் எங்கள் முன்னுரிமை.",
      heroDesc: "",
      book: "நேரம் பதிவு செய்ய",
      doctors: "எங்கள் மருத்துவர்கள்",
      aboutClinic: "கிளினிக் பற்றி",
      aboutText:
        "டாக்டர் மணிவேல் கிளினிக் முழுமையான மற்றும் தடுப்பு மாஸ்டர் ஹெல்த் சேக்கப் சேவைகளில் கவனம் செலுத்துகிறது. எங்கள் குறிக்கோள்: 'தடுப்பு சிகிச்சை சிறந்தது.'",
      servicesList: [
        "பொது ஆலோசனை",
        "இதய நோய் சேவைகள்",
        "நீரிழிவு மற்றும் உயர் இரத்த அழுத்த சிகிச்சை",
        "தடுப்பு சுகாதார பரிசோதனை",
        "ஆய்வக சேவைகள்",
        "அவசர சிகிச்சை"
      ],
      contactUs: "தொடர்பு கொள்ள",
      appointment: "ஆன்லைன் நேரம் பதிவு",
      name: "முழு பெயர்",
      phone: "தொலைபேசி எண்",
      date: "விரும்பிய தேதி",
      selectDoctor: "மருத்துவரை தேர்வு செய்யவும்",
      message: "வருகை காரணம்",
      submit: "சமர்ப்பிக்க"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t.clinicName}</h1>
          <div className="flex items-center gap-6">
            <nav className="space-x-6 hidden md:block">
              <a href="#about" className="hover:underline">{t.about}</a>
              
              <a href="#contact" className="hover:underline">{t.contact}</a>
            </nav>
            <Button
              variant="secondary"
              className="rounded-xl"
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
            >
              {language === "en" ? "தமிழ்" : "English"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section (No Photos) */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">
            DR MANIVEL CLINIC
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heroTitle}</h2>
          <p className="text-lg mb-6">{t.heroDesc}</p>
          <Button
            className="rounded-2xl px-6 py-3 text-base"
            onClick={() => {
              const section = document.getElementById("appointment");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t.book}
          </Button>
        </motion.div>
      </section>

      {/* Doctors Section */}
      <section id="doctor" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">{t.doctors}</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-2">Dr. T. Manivel, M.D.</h4>
                <p className="text-lg font-medium mb-2">Consultant Physician</p>
                <p className="mb-4"><strong>Regn:</strong> 32771</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-2">Dr. M. Sowmiya, M.D.</h4>
                <p className="text-lg font-medium mb-2">General Practitioner</p>
                <p className="mb-4"><strong>Regn:</strong> 119439</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">{t.aboutClinic}</h3>
          <p className="text-lg mb-6">{t.aboutText.split("Our motto")[0]}</p>

          <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-md inline-block mb-10">
            <p className="text-xl font-bold text-blue-700">
              {language === "en"
                ? "Prevention is better than cure"
                : "தடுப்பு சிகிச்சை சிறந்தது"}
            </p>
          </div>

          {/* Clinic Philosophy Section */}
          <div className="mt-16 mb-6">
            <h4 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide">
              {language === "en" ? "Clinic Philosophy" : "மருத்துவமனையின் தத்துவம்"}
            </h4>
            <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl p-10 md:p-14 shadow-xl border border-blue-200 mt-8">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg">
              “
            </div>

            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed mb-6 mt-4">
              நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்<br/>
              வாய்நாடி வாய்ப்பச் செயல்.
            </p>

            <p className="text-lg md:text-xl text-gray-700 italic max-w-3xl mx-auto">
              "Diagnose the disease, ascertain its root cause, study the remedy, and apply it at the proper time."
            </p>

            <div className="mt-6 text-sm text-gray-500 font-medium tracking-wide">
              — Thirukkural • Kural 948 • Chapter: Medicine
            </div>
          </div>
        </div>
      </section>

      
      {/* Appointment Section */}
      <section id="appointment" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">{t.appointment}</h3>
          <form onSubmit={handleSubmit} className="space-y-6 bg-blue-50 p-8 rounded-2xl shadow-lg">
            <div>
              <label className="block mb-2 font-medium">{t.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">{t.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">{t.date}</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">{t.selectDoctor}</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border"
              >
                <option>Dr. T. Manivel</option>
                <option>Dr. M. Sowmiya</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-xl border"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl py-3 text-base"
            >
              {loading
                ? (language === "en" ? "Submitting..." : "சமர்ப்பிக்கப்படுகிறது...")
                : t.submit}
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">{t.contactUs}</h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side – Phone & Email */}
            <div className="space-y-8">
              <div className="flex items-start gap-3">
                <Phone className="text-blue-700 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <p>
                    <a href="tel:+919080426803" className="hover:underline">+91 90804 26803</a>
                  </p>
                  <p>
                    <a href="tel:+919043706241" className="hover:underline">+91 90437 06241</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-blue-700 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p>
                    <a href="mailto:drmanivelclinic@gmail.com" className="hover:underline">
                      drmanivelclinic@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side – Address + Google Maps */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-700 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p>
                    22, Main Cross Street,<br />
                    Kamaraj Nagar, Avadi,<br />
                    Chennai – 600071
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/z2KxmatALofdSacF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-6 py-3">
                  Open in Google Maps
                </Button>
              </a>

              {/* Embedded Google Map */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border">
                <iframe
                  src="https://www.google.com/maps?q=13.111111,80.097361&z=19&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-6 mt-10">
        <p>© {new Date().getFullYear()} {t.clinicName}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
