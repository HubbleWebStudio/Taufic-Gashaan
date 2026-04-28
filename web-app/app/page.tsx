/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <a href="#" className="nav-logo">TAUFIC.GASHAAN</a>
        <ul className="nav-links">
          <li><a href="#" className="active">Inicio</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <a href="#" className="nav-cta">Consulta</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-headline">
            DISEÑO<br />
            QUE<br />
            PERDURA.
          </h1>
          <div className="hero-right">
            <div className="hero-location">Guadalajara · México</div>
            <p className="hero-desc">
              Pioneros en arquitectura de contenedores habitables de lujo. Diseñamos espacios que transforman la forma de vivir, con precisión y visión que perduran generaciones.
            </p>
            <a href="#" className="hero-btn">Ver proyectos</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85" alt="Proyecto Taufic Gashaan" />
          <div className="glass-card">
            <div className="glass-card-logo">Taufic</div>
            <div className="glass-field">
              <label>Tipo de proyecto</label>
              <select defaultValue="Casa Contenedor">
                <option>Casa Contenedor</option>
                <option>Residencia Moderna</option>
                <option>Penthouse</option>
              </select>
            </div>
            <div className="glass-field">
              <label>Superficie aprox.</label>
              <select defaultValue="150–300 m²">
                <option>150–300 m²</option>
                <option>300–500 m²</option>
                <option>500+ m²</option>
              </select>
            </div>
            <div className="glass-radios">
              <div className="glass-radio"><div className="radio-circle on"></div><span>Diseño personalizado</span></div>
              <div className="glass-radio"><div className="radio-circle"></div><span>Proyecto llave en mano</span></div>
            </div>
          </div>
          <div className="hero-info-card">
            <div className="avatar-stack">
              <span><img src="https://i.pravatar.cc/64?img=11" alt="" /></span>
              <span><img src="https://i.pravatar.cc/64?img=22" alt="" /></span>
              <span><img src="https://i.pravatar.cc/64?img=33" alt="" /></span>
            </div>
            <div className="hero-info-text">
              <strong>150+</strong>
              <small>Clientes satisfechos</small>
            </div>
          </div>
        </div>
      </section>

      {/* PILL TAGS */}
      <div className="pill-bar">
        <span className="pill-bar-label">Especialidades</span>
        <span className="pill active"><span className="pill-dot"></span>Casa Contenedor</span>
        <span className="pill">Residencia de Lujo</span>
        <span className="pill">Diseño Personalizado</span>
        <span className="pill">Arquitectura Modular</span>
        <span className="pill">Proyecto Llave en Mano</span>
        <span className="pill">Remodelación Premium</span>
      </div>

      {/* STATS */}
      <section className="stats">
        <div>
          <p className="stats-title">Arquitectura que transforma espacios.</p>
          <p className="stats-sub">Cada proyecto es una declaración de lujo y precisión constructiva.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-num">20+</div><div className="stat-label">Años de experiencia</div></div>
          <div className="stat-card"><div className="stat-num">150+</div><div className="stat-label">Proyectos completados</div></div>
          <div className="stat-card"><div className="stat-num">12</div><div className="stat-label">Premios AMDI</div></div>
        </div>
      </section>

      {/* CINEMATIC */}
      <section className="cinematic">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85" alt="Proyecto Taufic" />
        <div className="cinematic-topbar">
          <span className="cinematic-meta">Guadalajara, Jalisco · Disponible para 2026</span>
          <span className="cinematic-badge">Galería (43)</span>
        </div>
        <div className="cinematic-content">
          <p className="cinematic-since">Desde 2003</p>
          <h2 className="cinematic-heading">ARQUITECTURA<br />DE LUJO PARA<br />VIVIR DIFERENTE.</h2>
          <p className="cinematic-tagline">Construye tu espacio ideal — <em>con visión y permanencia.</em></p>
        </div>
        <div className="cinematic-specs">
          <div className="spec-item"><div className="spec-key">Área promedio</div><div className="spec-val">250 m²</div></div>
          <div className="spec-item"><div className="spec-key">Materiales</div><div className="spec-val">Acero · Madera · Vidrio</div></div>
          <div className="spec-item"><div className="spec-key">Tiempo de entrega</div><div className="spec-val">6–10 meses</div></div>
          <div className="spec-item"><div className="spec-key">Modalidad</div><div className="spec-val">Llave en mano</div></div>
        </div>
        <div className="cinematic-video">
          <div className="cinematic-video-thumb">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" alt="Showreel" />
            <div className="play-btn">
              <div className="play-icon">
                <svg viewBox="0 0 10 12"><path d="M1 1l8 5-8 5V1z" /></svg>
              </div>
            </div>
          </div>
          <div className="cinematic-video-label">
            <span>▶ Play Showreel</span>
            <span>2:14</span>
          </div>
        </div>
        <div className="scroll-hint">Scroll para descubrir más</div>
      </section>

      {/* FEATURE */}
      <section className="feature">
        <div className="feature-header">
          <h2 className="feature-heading">Pioneros en contenedores habitables de lujo.</h2>
          <p className="feature-desc">
            Taufic Gashaan lidera el desarrollo de arquitectura de contenedores habitables en México, combinando innovación estructural con acabados de primer nivel. Reconocidos por AMDI y medios internacionales como referentes del sector residencial premium.
          </p>
        </div>
        <div className="feature-cards">
          <div className="fcard-dark">
            <div>
              <h3>Cada proyecto,<br />una obra de arte.</h3>
              <p>Desde el diseño conceptual hasta la entrega final, supervisamos cada detalle para garantizar resultados excepcionales que perduran en el tiempo.</p>
            </div>
            <div className="fcard-arrow">
              <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </div>
          </div>
          <div className="fcard-photo">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85" alt="Proyecto Taufic Gashaan" />
          </div>
        </div>
      </section>

      {/* MINI FEATURES */}
      <section className="mini-features">
        <div className="mini-card">
          <div className="mini-icon">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
          </div>
          <h4>Diseño personalizado</h4>
          <p>Cada proyecto parte de cero. Escuchamos tu visión y la convertimos en planos, renders y finalmente en la casa de tus sueños.</p>
          <a href="#" className="mini-learn">Conoce el proceso <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
        </div>
        <div className="mini-card">
          <div className="mini-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          </div>
          <h4>Materiales de primer nivel</h4>
          <p>Usamos materiales certificados — acero estructural, madera tratada, vidrio laminado — que garantizan durabilidad y estética superior.</p>
          <a href="#" className="mini-learn">Ver especificaciones <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
        </div>
        <div className="mini-card">
          <div className="mini-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          </div>
          <h4>Entrega en tiempo récord</h4>
          <p>La arquitectura modular permite entregar proyectos completos en 6 a 10 meses, sin sacrificar calidad ni detalle constructivo.</p>
          <a href="#" className="mini-learn">Ver tiempos <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-header">
          <h2 className="gallery-heading">Proyectos<br />destacados.</h2>
          <a href="#" className="gallery-link">Ver todos los proyectos →</a>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item tall">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85" alt="Proyecto 1" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=85" alt="Proyecto 2" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=700&q=85" alt="Proyecto 3" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=700&q=85" alt="Proyecto 4" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=85" alt="Proyecto 5" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="testimonial-inner">
          <div className="testimonial-stars">
            {[0,1,2,3,4].map(i => (
              <svg key={i} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ))}
          </div>
          <p className="testimonial-quote">
            &ldquo;Taufic transformó completamente nuestra idea. Entregaron algo que nunca imaginamos posible — una casa contenedor que se siente como una obra de arte, con cada detalle pensado al milímetro.&rdquo;
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <img src="https://i.pravatar.cc/96?img=47" alt="Cliente" />
            </div>
            <div>
              <div className="testimonial-name">Rodrigo Esquivel</div>
              <div className="testimonial-role">Guadalajara, Jalisco</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="section-divider-full"></div>
      <section className="cta-banner">
        <div className="cta-card">
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85" alt="Taufic Gashaan" />
          <div className="cta-overlay">
            <h2>DONDE EL LUJO<br />SE CONSTRUYE<br />CON VISIÓN.</h2>
            <a href="#">Agenda tu consulta</a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2 className="process-heading">¿Cómo trabajamos<br />contigo?</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num step-01">Consulta inicial</div>
            <h4>Escuchamos tu visión</h4>
            <p>En una sesión de 60 minutos conocemos tu estilo, presupuesto y necesidades. Sin compromiso, sin burocracia.</p>
          </div>
          <div className="process-step">
            <div className="step-num step-02">Diseño y propuesta</div>
            <h4>Creamos tu proyecto</h4>
            <p>Desarrollamos planos, renders 3D y presupuesto detallado. Iteramos hasta que cada decisión te convenza al 100%.</p>
          </div>
          <div className="process-step">
            <div className="step-num step-03">Construcción y entrega</div>
            <h4>Lo construimos por ti</h4>
            <p>Supervisamos cada etapa de la obra. Entrega puntual, materiales certificados, garantía post-entrega incluida.</p>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER */}
      <div className="brand-section">
        <div className="brand-name">TAUFIC</div>
      </div>

      {/* FOOTER BAR */}
      <footer>
        <span className="footer-copy">© 2026 Taufic Gashaan. Todos los derechos reservados.</span>
        <ul className="footer-links">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">WhatsApp</a></li>
        </ul>
      </footer>
    </>
  );
}
