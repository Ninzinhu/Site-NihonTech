"use client";
import styles from "@/styles/ServicesSection.module.css";
import {
  Browser,
  ChartPie,
  Code,
  DeviceMobile,
  Globe,
  Monitor,
  Robot,
  Shield,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} weight="duotone" />,
      title: "Automação Inteligente",
      description:
        "Elimine tarefas repetitivas e aumente a eficiência com inteligência artificial avançada.",
    },
    {
      icon: <Robot size={32} weight="duotone" />,
      title: "Chatbots & Assistência Virtual",
      description:
        "Soluções de atendimento automatizadas que trabalham 24 horas por dia para seus clientes.",
    },
    {
      icon: <Globe size={32} weight="duotone" />,
      title: "Integração e Implementação",
      description:
        "Conecte todas suas ferramentas e plataformas com soluções personalizadas sob medida.",
    },
    {
      icon: <Browser size={32} weight="duotone" />,
      title: "Web Development",
      description:
        "Sites e aplicações web modernas, responsivas e otimizadas para performance e conversão.",
    },
    {
      icon: <DeviceMobile size={32} weight="duotone" />,
      title: "Aplicação Mobile",
      description:
        "Apps nativos e multiplataforma desenvolvidos com tecnologia de ponta para iOS e Android.",
    },
    {
      icon: <ChartPie size={32} weight="duotone" />,
      title: "Análise de Dados",
      description:
        "Transforme dados em insights acionáveis para tomar decisões estratégicas.",
    },
    {
      icon: <Shield size={32} weight="duotone" />,
      title: "Sistemas Únicos",
      description:
        "Software personalizado sob medida para atender às necessidades específicas do seu negócio.",
    },
    {
      icon: <Monitor size={32} weight="duotone" />,
      title: "Business Intelligence",
      description:
        "Dashboards inteligentes e relatórios automatizados para visualização de dados.",
    },
    {
      icon: <Globe size={32} weight="duotone" />,
      title: "Infraestrutura Cloud",
      description:
        "Soluções em nuvem escaláveis e seguras para sua empresa crescer sem limites.",
    },
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const handle = () => setIsDesktop(mq.matches);
    handle();
    if (mq.addEventListener) mq.addEventListener("change", handle);
    else mq.addListener(handle);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle);
      else mq.removeListener(handle);
    };
  }, []);

  // Ensure any external script (eg. jQuery) that mutates the grid doesn't force 4 columns.
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const applyDesired = () => {
      const isWide = window.matchMedia("(min-width: 901px)").matches;
      if (isWide) {
        // set inline style to override other inline styles
        el.style.gridTemplateColumns = "repeat(3, 1fr)";
        el.style.gridAutoRows = "minmax(220px, auto)";
      } else {
        // allow CSS media queries to take over on smaller viewports
        el.style.removeProperty("grid-template-columns");
        el.style.removeProperty("grid-auto-rows");
      }
    };

    // Apply immediately
    applyDesired();

    // Watch for attribute changes (scripts may replace style/class)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (
          m.type === "attributes" &&
          (m.attributeName === "style" || m.attributeName === "class")
        ) {
          applyDesired();
          break;
        }
      }
    });

    mo.observe(el, { attributes: true, attributeFilter: ["style", "class"] });

    const onResize = () => applyDesired();
    window.addEventListener("resize", onResize);

    return () => {
      mo.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [gridRef]);

  return (
    <section className={styles.servicesSection} id="services-tech">
      <div className={styles.container}>
        <h2 className={styles.title}>Soluções Inteligentes</h2>
        <p className={styles.subtitle}>
          Tecnologia de ponta para automatizar e escalar seu negócio
        </p>

        <div
          ref={gridRef}
          className={styles.servicesGrid}
          style={
            isDesktop ? { gridTemplateColumns: "repeat(3, 1fr)" } : undefined
          }>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
