import React from 'react';
import { Phone, Mail, MessageCircle, FileQuestion, BookOpen, Video } from 'lucide-react';

export default function Support() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: '24/7 Phone Support',
      description: 'Get immediate assistance from our expert team',
      action: 'Call Now',
      link: 'tel:1800-123-4567'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      link: '#'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Send us your queries and get responses within 24 hours',
      action: 'Email Us',
      link: 'mailto:support@maxlife.com'
    }
  ];

  const resources = [
    {
      icon: <FileQuestion className="h-6 w-6" />,
      title: 'FAQs',
      description: 'Find answers to commonly asked questions',
      link: '#'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Knowledge Base',
      description: 'Detailed guides and documentation',
      link: '#'
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: 'Video Tutorials',
      description: 'Learn through our video guides',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How do I file a claim?',
      answer: 'You can file a claim through our online portal by logging into your account and navigating to the Claims section. Alternatively, you can contact our 24/7 support team for assistance.'
    },
    {
      question: 'What documents do I need for claims?',
      answer: 'Required documents typically include proof of incident, medical reports (if applicable), police reports (for accidents), and any relevant bills or receipts. The specific requirements vary by claim type.'
    },
    {
      question: 'How long does claim processing take?',
      answer: 'Most claims are processed within 7-10 business days. However, complex cases may take longer. You can track your claim status through your online account.'
    },
    {
      question: 'Can I modify my insurance plan?',
      answer: 'Yes, you can modify your insurance plan during the renewal period or at specific intervals as per your policy terms. Contact our support team for assistance with plan modifications.'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-xl text-blue-100">We're here to help you 24/7</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a
                href={method.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                {method.action} →
              </a>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Self-Help Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600 mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-gray-50">
                  {faq.question}
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}