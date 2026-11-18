export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { AttributionComponent } from '@gitroom/frontend/components/auth/attribution.component';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import { MantineWrapper } from '@gitroom/react/helpers/mantine.wrapper';
import { Toaster } from '@gitroom/react/toaster/toaster';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));

const channels = [
  { name: 'Instagram', icon: '/icons/platforms/instagram.png' },
  { name: 'YouTube', icon: '/icons/platforms/youtube.png' },
  { name: 'Telegram', icon: '/icons/platforms/telegram.png' },
];

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MantineWrapper>
      <Toaster />
      <div className="bg-[#0B0A10] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
        <ReturnUrlComponent />
        <AttributionComponent />
        <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[560px] lg:flex-none rounded-[20px] bg-[#15131C] border border-white/[0.06]">
          <div className="w-full max-w-[400px] mx-auto gap-[28px] h-full flex flex-col justify-center">
            <LogoTextComponent />
            <div className="flex">{children}</div>
          </div>
          <div className="text-center text-[12px] text-white/40 pt-[24px]">
            Nashrchi · avtomaktab.com
          </div>
        </div>
        <div className="relative flex-1 hidden lg:flex flex-col justify-center overflow-hidden rounded-[20px] px-[72px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(97,43,211,0.45),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgba(245,165,36,0.28),transparent_50%)]" />
          <div className="relative max-w-[560px] flex flex-col gap-[28px]">
            <div className="text-[13px] uppercase tracking-[0.24em] text-white/50">
              Nashrchi
            </div>
            <div className="text-[44px] leading-[1.12] font-[600] tracking-[-0.02em]">
              Kontentni bir joyda tayyorlang.{' '}
              <span className="text-[#F5A524]">
                Hamma kanalga o&apos;z vaqtida chiqadi.
              </span>
            </div>
            <div className="text-[17px] leading-[1.6] text-white/60 max-w-[460px]">
              Video, matn va muqova bir marta yuklanadi, kalendarga
              qo&apos;yiladi va belgilangan soatda kanallarga joylanadi.
            </div>
            <div className="flex gap-[12px] flex-wrap">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center gap-[10px] rounded-full bg-white/[0.06] border border-white/[0.08] ps-[6px] pe-[16px] py-[6px] text-[14px]"
                >
                  <img
                    src={channel.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  {channel.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MantineWrapper>
  );
}
