import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="page-wrap flex h-[64px] items-center md:h-[72px]">
        <Logo />
      </div>
    </header>
  );
}
