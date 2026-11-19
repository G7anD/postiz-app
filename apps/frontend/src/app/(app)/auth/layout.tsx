export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { AttributionComponent } from '@gitroom/frontend/components/auth/attribution.component';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import { MantineWrapper } from '@gitroom/react/helpers/mantine.wrapper';
import { Toaster } from '@gitroom/react/toaster/toaster';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));

// One line per day (Tashkent time). Deliberately says nothing about what the app does.
const lines = [
  { lead: 'Mukammalini kutmang.', accent: 'Boshlanganini davom ettiring.' },
  { lead: 'Har kuni bir qadam.', accent: "Bir yilda butun yo'l." },
  { lead: 'Bugungi mehnat', accent: 'ertangi ishonchni quradi.' },
  { lead: 'Kichik ish, har kuni.', accent: "Katta natija shundan tug'iladi." },
  { lead: "Ko'rinmaydigan mehnat", accent: "bir kun albatta ko'rinadi." },
  { lead: "Sekin bo'lsa ham,", accent: "to'xtamang." },
  { lead: "Tayyor bo'lishni kutmang.", accent: "Tayyorlik yo'lda keladi." },
];

const months = [
  'yanvar',
  'fevral',
  'mart',
  'aprel',
  'may',
  'iyun',
  'iyul',
  'avgust',
  'sentabr',
  'oktabr',
  'noyabr',
  'dekabr',
];
const weekdays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
const weekdayNames = [
  'dushanba',
  'seshanba',
  'chorshanba',
  'payshanba',
  'juma',
  'shanba',
  'yakshanba',
];

function today() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'short',
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  // Monday = 0
  const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(
    parts.weekday
  );
  const dayOfYear = Math.floor(
    (Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 1)) / 86400000
  );
  return { month, day, weekday, dayOfYear };
}

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const now = today();
  const line = lines[now.dayOfYear % lines.length];

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
          <div className="lg:hidden text-center text-[14px] leading-[1.5] text-white/50 pt-[24px] max-w-[400px] mx-auto">
            {line.lead}{' '}
            <span className="text-[#F5A524]">{line.accent}</span>
          </div>
        </div>
        <div className="relative flex-1 hidden lg:flex flex-col justify-between overflow-hidden rounded-[20px] px-[72px] py-[64px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(97,43,211,0.42),transparent_55%),radial-gradient(ellipse_at_90%_95%,rgba(245,165,36,0.26),transparent_50%)]" />
          <div className="relative text-[14px] text-white/55 tracking-[0.02em]">
            {now.day}-{months[now.month - 1]}, {weekdayNames[now.weekday]}
          </div>
          <div className="relative max-w-[620px] flex flex-col gap-[36px]">
            <div className="text-[64px] leading-[1.04] font-[600] tracking-[-0.03em]">
              {line.lead}{' '}
              <span className="text-[#F5A524]">{line.accent}</span>
            </div>
            <div className="text-[18px] leading-[1.6] text-white/55 max-w-[440px]">
              Bugun ham shu yerdasiz. Shuning o&apos;zi oldinga qadam.
            </div>
          </div>
          <div className="relative flex gap-[10px]">
            {weekdays.map((name, i) => (
              <div key={name} className="flex flex-col items-center gap-[8px]">
                <div
                  className={
                    i < now.weekday
                      ? 'w-[34px] h-[34px] rounded-full bg-[#F5A524]/85'
                      : i === now.weekday
                      ? 'w-[34px] h-[34px] rounded-full border-[2px] border-[#F5A524] shadow-[0_0_24px_rgba(245,165,36,0.45)]'
                      : 'w-[34px] h-[34px] rounded-full bg-white/[0.06] border border-white/[0.08]'
                  }
                />
                <div
                  className={
                    i === now.weekday
                      ? 'text-[12px] text-white'
                      : 'text-[12px] text-white/40'
                  }
                >
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MantineWrapper>
  );
}
