import { Open_Sans, Roboto, Inter, Orbitron, Exo_2 } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto'
});

export const open_sans = Open_Sans({
    subsets: ['latin']
});

export const inter = Inter({ subsets: ['latin'] });

export const orbitron = Orbitron({
    subsets: ['latin']
});

export const exo2 = Exo_2({
    subsets: ['latin'],
    variable: '--font-exo2'
});