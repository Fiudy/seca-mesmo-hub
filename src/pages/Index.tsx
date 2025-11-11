import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Music, MessageCircle, ShoppingBag, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logoSecaMesmo from "@/assets/logo-seca-mesmo.png";
import logoAlphaCo from "@/assets/logo-alphaco.png";
import logoProbiotica from "@/assets/logo-probiotica.png";

const Index = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "🔗 Link copiado!",
        description: "Compartilhe com seus amigos",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Tente novamente",
        variant: "destructive",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/rugfernandes/",
      color: "#E4405F",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@rugfernandes",
      color: "#FF0000",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@rugfernandes?_r=1&_t=ZS-91JgMC3i4LI",
      color: "#00F2EA",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/557181312609",
      color: "#25D366",
    },
  ];

  const partners = [
    {
      name: "Alpha Co.",
      logo: logoAlphaCo,
      coupon: "RUG",
      url: "https://usealphaco.com.br/",
    },
    {
      name: "Probiótica",
      logo: logoProbiotica,
      coupon: "SOUPRORUG",
      url: "https://www.probiotica.com.br/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4">
      <motion.div
        className="max-w-md mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Logo */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <img
              src={logoSecaMesmo}
              alt="Seca Mesmo Logo"
              className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(240,129,38,0.5)]"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-display tracking-wider text-foreground">
            RUGGERO FERNANDES
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-2xl p-6 space-y-3"
        >
          <h2 className="text-2xl font-display text-primary tracking-wide">
            SOBRE MIM
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Treinador e multisportista apaixonado por movimento. Especialista em treinos com o peso do corpo e criador do <span className="text-primary font-semibold">SM (Seca Mesmo)</span>, um método prático e eficiente pra quem quer transformar o corpo treinando em casa.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm">
            Atuei como personal trainer e coach em academias e centros de treinamento, acompanhando alunos de diferentes níveis — do iniciante ao avançado. Hoje, dedico meu trabalho a ajudar pessoas comuns a alcançarem resultados reais com treinos inteligentes, sem depender de equipamentos caros ou tempo sobrando.
          </p>
        </motion.div>

        {/* Main CTA - Hotmart */}
        <motion.div variants={itemVariants}>
          <a
            href="https://pay.hotmart.com/Y95512578P"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              className="w-full h-auto py-6 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl link-button group text-lg font-bold shadow-lg shadow-primary/50"
            >
              <ShoppingBag className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              <div className="flex-1 text-left">
                <div className="font-display text-2xl tracking-wide">TREINO SECA MESMO</div>
                <div className="text-sm opacity-90 font-normal">Transforme seu corpo agora</div>
              </div>
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-xl font-display text-primary tracking-wide text-center mb-4">
            ME SIGA NAS REDES
          </h2>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full h-auto py-5 px-6 bg-card hover:bg-card/80 border-2 border-primary/30 hover:border-primary rounded-xl link-button group"
              >
                <link.icon
                  className="w-6 h-6 mr-4 text-primary group-hover:scale-110 transition-transform"
                  style={{ color: link.color }}
                />
                <span className="flex-1 text-left text-foreground font-semibold text-lg">
                  {link.name}
                </span>
              </Button>
            </a>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-display text-primary tracking-wide text-center">
            PARCEIROS OFICIAIS
          </h2>
          <div className="space-y-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-card border-2 border-primary/30 rounded-xl p-5 hover:border-primary hover-glow transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-20 h-20 bg-background rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground tracking-wide">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">Cupom:</span>
                      <code className="bg-primary/20 text-primary px-3 py-1 rounded-lg font-bold text-base">
                        {partner.coupon}
                      </code>
                    </div>
                  </div>
                </div>
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Acessar Site
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share Button */}
        <motion.div variants={itemVariants} className="text-center">
          <Button
            onClick={handleShare}
            variant="outline"
            className="bg-card hover:bg-card/80 border-2 border-primary/30 hover:border-primary px-8 py-6 rounded-xl group"
          >
            {copied ? (
              <Check className="w-5 h-5 mr-2 text-primary" />
            ) : (
              <Share2 className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
            )}
            <span className="font-semibold text-lg">
              {copied ? "Link Copiado!" : "Compartilhar"}
            </span>
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center space-y-4 pt-6 border-t border-border">
          <p className="text-lg font-semibold text-primary italic">
            Transforme seu corpo. Treine em casa. Viva o método Seca Mesmo.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Seca Mesmo | Desenvolvido por Luis Guilherme GOC
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
