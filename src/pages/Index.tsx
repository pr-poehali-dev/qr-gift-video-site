import { useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/3a882a7c-afe6-4b3e-8f98-988047bd8b71.jpg",
    caption: "Наш любимый учитель",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/48a52ea2-eeec-42f0-b3c7-12cedc39ae64.jpg",
    caption: "Наш дружный класс",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/2d192ab7-0f30-4c42-89ae-0c8a0ed1e4de.jpg",
    caption: "Тёплые воспоминания",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/3a882a7c-afe6-4b3e-8f98-988047bd8b71.jpg",
    caption: "Лучшие моменты",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/48a52ea2-eeec-42f0-b3c7-12cedc39ae64.jpg",
    caption: "Вместе",
  },
  {
    id: 6,
    src: "https://cdn.poehali.dev/projects/cd8a16e1-a7d1-4dfc-bff2-8757da2e6421/files/2d192ab7-0f30-4c42-89ae-0c8a0ed1e4de.jpg",
    caption: "Наш класс",
  },
];

export default function Index() {
  const [lightboxPhoto, setLightboxPhoto] = useState<(typeof photos)[0] | null>(null);

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--bg-warm)" }}>

      {/* Декоративный фон */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #e8c080, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #d4956a, transparent)" }} />
      </div>

      {/* Шапка */}
      <header className="relative z-10 text-center pt-16 pb-8 px-6">
        <p
          className="font-caveat text-2xl mb-4 animate-fade-in"
          style={{ color: "var(--accent-warm)", opacity: 0, animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          ✦ с любовью и благодарностью ✦
        </p>
        <h1
          className="font-cormorant text-6xl md:text-8xl font-light leading-tight mb-6 animate-fade-in"
          style={{ color: "var(--text-primary)", opacity: 0, animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Дорогому<br />
          <em>учителю</em>
        </h1>
        <div
          className="w-24 h-px mx-auto mb-6 animate-fade-in"
          style={{ background: "linear-gradient(to right, transparent, var(--accent-warm), transparent)", opacity: 0, animationDelay: "0.5s", animationFillMode: "forwards" }}
        />
        <p
          className="font-golos text-lg md:text-xl max-w-xl mx-auto leading-relaxed animate-fade-in"
          style={{ color: "var(--text-secondary)", opacity: 0, animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Слова благодарности, тёплые воспоминания и самые искренние пожелания от вашего класса
        </p>
      </header>

      {/* Разделитель */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px w-24 md:w-48" style={{ background: "linear-gradient(to right, transparent, var(--border-warm))" }} />
        <span className="font-caveat text-3xl animate-float" style={{ color: "var(--accent-warm)" }}>❀</span>
        <div className="h-px w-24 md:w-48" style={{ background: "linear-gradient(to left, transparent, var(--border-warm))" }} />
      </div>

      {/* Видео */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-3" style={{ color: "var(--text-primary)" }}>
            Наше видео-поздравление
          </h2>
          <p className="font-golos text-base" style={{ color: "var(--text-muted)" }}>
            Мы снимали это с душой
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in"
          style={{ opacity: 0, animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <div className="absolute inset-0 rounded-3xl z-10 pointer-events-none" style={{ boxShadow: "inset 0 0 0 2px rgba(196, 131, 47, 0.2)" }} />

          <div
            className="relative w-full aspect-video flex flex-col items-center justify-center cursor-pointer group"
            style={{ background: "linear-gradient(135deg, #f9edda 0%, #f2d9b3 50%, #e8c080 100%)" }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #c4832f 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                style={{ background: "var(--accent-warm)" }}
              >
                <Icon name="Play" size={36} className="ml-2" style={{ color: "#fdf8f0" }} />
              </div>
              <div className="text-center">
                <p className="font-cormorant text-2xl font-light mb-1" style={{ color: "var(--text-primary)" }}>
                  Нажмите, чтобы посмотреть
                </p>
                <p className="font-golos text-sm" style={{ color: "var(--text-muted)" }}>
                  Здесь будет ваше видео-поздравление
                </p>
              </div>
            </div>

            <span className="absolute top-6 left-8 text-3xl opacity-40 animate-float" style={{ animationDelay: "0.5s" }}>🌸</span>
            <span className="absolute top-8 right-10 text-2xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>✿</span>
            <span className="absolute bottom-6 left-12 text-2xl opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>🍂</span>
            <span className="absolute bottom-8 right-8 text-3xl opacity-40 animate-float" style={{ animationDelay: "0.3s" }}>🌼</span>
          </div>
        </div>
      </section>

      {/* Цитата */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-10 text-center">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{ background: "rgba(242, 217, 179, 0.35)", border: "1px solid rgba(196, 131, 47, 0.15)" }}
        >
          <span
            className="font-cormorant text-8xl block mb-2"
            style={{ color: "var(--accent-warm)", opacity: 0.4, lineHeight: "0.8" }}
          >
            "
          </span>
          <blockquote
            className="font-cormorant text-2xl md:text-3xl italic font-light leading-relaxed mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Учитель — это тот, кто зажигает искру в душах своих учеников и освещает им путь на всю жизнь.
          </blockquote>
          <cite className="font-caveat text-xl not-italic" style={{ color: "var(--accent-warm)" }}>
            — с благодарностью, ваш класс
          </cite>
        </div>
      </section>

      {/* Разделитель */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px w-24 md:w-48" style={{ background: "linear-gradient(to right, transparent, var(--border-warm))" }} />
        <span className="font-caveat text-3xl animate-float" style={{ color: "var(--accent-warm)", animationDelay: "0.7s" }}>✦</span>
        <div className="h-px w-24 md:w-48" style={{ background: "linear-gradient(to left, transparent, var(--border-warm))" }} />
      </div>

      {/* Галерея */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-3" style={{ color: "var(--text-primary)" }}>
            Наши воспоминания
          </h2>
          <p className="font-golos text-base" style={{ color: "var(--text-muted)" }}>
            Моменты, которые останутся в сердце навсегда
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative cursor-pointer animate-fade-in"
              style={{ opacity: 0, animationDelay: `${0.15 * index}s`, animationFillMode: "forwards" }}
              onClick={() => setLightboxPhoto(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 z-10 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 2px rgba(196, 131, 47, 0.4)" }}
                />
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "sepia(15%) saturate(90%) brightness(1.02)" }}
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(61, 36, 9, 0.75), transparent)" }}
                >
                  <p className="font-caveat text-xl" style={{ color: "#fdf6ec" }}>{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Пожелания */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-3" style={{ color: "var(--text-primary)" }}>
            Слова от нас
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "Heart", text: "Спасибо за терпение и доброту, которую вы дарили каждый день", delay: "0s" },
            { icon: "Star", text: "Вы научили нас не только урокам, но и тому, как быть людьми", delay: "0.2s" },
            { icon: "Sparkles", text: "Ваши слова останутся с нами на всю жизнь — мы вас не забудем", delay: "0.4s" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl animate-fade-in"
              style={{
                background: "rgba(249, 237, 218, 0.6)",
                border: "1px solid rgba(196, 131, 47, 0.12)",
                opacity: 0,
                animationDelay: item.delay,
                animationFillMode: "forwards",
              }}
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(184, 114, 42, 0.12)" }}
              >
                <Icon name={item.icon as "Heart" | "Star" | "Sparkles"} size={22} style={{ color: "var(--accent-warm)" }} />
              </div>
              <p className="font-golos text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QR-код */}
      <section className="relative z-10 max-w-sm mx-auto px-6 py-12 text-center">
        <h2 className="font-cormorant text-4xl font-light mb-3" style={{ color: "var(--text-primary)" }}>
          Поделись подарком
        </h2>
        <p className="font-golos text-base mb-8" style={{ color: "var(--text-muted)" }}>
          Отсканируй — и сайт откроется на любом телефоне
        </p>
        <div className="inline-block p-5 rounded-3xl shadow-lg" style={{ background: "#fff8f0", border: "2px solid rgba(196, 131, 47, 0.2)" }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://preview--qr-gift-video-site.poehali.dev/&color=3d2409&bgcolor=fff8f0&margin=4"
            alt="QR-код сайта"
            className="w-48 h-48 md:w-56 md:h-56 rounded-xl"
          />
        </div>
        <p className="font-caveat text-lg mt-5" style={{ color: "var(--accent-warm)" }}>
          preview--qr-gift-video-site.poehali.dev
        </p>
      </section>

      {/* Футер */}
      <footer className="relative z-10 text-center py-16 px-6">
        <div className="w-24 h-px mx-auto mb-8" style={{ background: "linear-gradient(to right, transparent, var(--border-warm), transparent)" }} />
        <p className="font-caveat text-3xl md:text-4xl mb-3" style={{ color: "var(--accent-warm)" }}>
          С бесконечной любовью и уважением ❤️
        </p>
        <p className="font-cormorant text-xl font-light italic" style={{ color: "var(--text-muted)" }}>
          Ваши ученики — всегда
        </p>
        <p className="font-golos text-sm mt-6" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
          2026
        </p>
      </footer>

      {/* Лайтбокс */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in"
          style={{ background: "rgba(30, 15, 5, 0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-110"
              style={{ background: "var(--accent-warm)" }}
              onClick={() => setLightboxPhoto(null)}
            >
              <Icon name="X" size={18} style={{ color: "#fdf8f0" }} />
            </button>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} className="w-full object-cover" />
            </div>
            <p className="font-caveat text-2xl text-center mt-4" style={{ color: "#f9edda" }}>
              {lightboxPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}