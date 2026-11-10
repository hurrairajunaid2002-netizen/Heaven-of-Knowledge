import { siteConfig } from "@/config/siteConfig";

// Builds a WhatsApp click-to-chat URL with a pre-filled, encoded message.
// Works on desktop (web.whatsapp.com) and mobile (native app) via wa.me.
export function buildWhatsAppLink(message, phone = siteConfig.whatsappNumber) {
  const digitsOnly = phone.replace(/\D/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(amount, currency = "USD") {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);
  } catch {
    return `$${amount}`;
  }
}

export function getBookInquiryMessage(book) {
  return `Hello! I am interested in purchasing "${book.title}". The listed price is ${formatPrice(
    book.price,
    book.currency
  )}. Please share the ordering details.`;
}

export function getGeneralInquiryMessage() {
  return `Hello! I'd like to know more about the books available at ${siteConfig.name}.`;
}

export function getBookWhatsAppLink(book) {
  return buildWhatsAppLink(getBookInquiryMessage(book));
}

export function getGeneralWhatsAppLink() {
  return buildWhatsAppLink(getGeneralInquiryMessage());
}
