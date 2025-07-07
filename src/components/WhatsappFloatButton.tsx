import Image from "next/image";

export default function WhatsappFloatButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        background: "#25d366",
        borderRadius: "50%",
        width: 64,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}>
      <Image
        src="/imgs/whatsapp.svg"
        alt="WhatsApp"
        width={36}
        height={36}
        style={{ width: 36, height: 36 }}
      />
    </a>
  );
}
