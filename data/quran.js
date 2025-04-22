const quranVerses = [
    {
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "In the name of Allah, the Most Gracious, the Most Merciful",
        reference: "Al-Fatiha 1:1",
        tafsir: "This verse is known as the Basmalah, and it is recommended to begin all good actions with it."
    },
    {
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "All praise is due to Allah, Lord of the worlds",
        reference: "Al-Fatiha 1:2",
        tafsir: "This verse teaches us to be grateful to Allah and acknowledge His lordship over all creation."
    },
    {
        arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
        translation: "And your god is one God. There is no deity worthy of worship except Him, the Most Gracious, the Most Merciful",
        reference: "Al-Baqarah 2:163",
        tafsir: "This verse establishes the fundamental principle of Islamic monotheism (Tawheed)."
    },
    {
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence",
        reference: "Al-Baqarah 2:255",
        tafsir: "This is the beginning of Ayat al-Kursi, one of the most powerful verses in the Quran."
    },
    {
        arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        translation: "So remember Me; I will remember you. And be grateful to Me and do not deny Me",
        reference: "Al-Baqarah 2:152",
        tafsir: "This verse emphasizes the importance of remembering Allah and being grateful to Him."
    }
];

// For browsers
if (typeof window !== 'undefined') {
    window.quranVerses = quranVerses;
}

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quranVerses;
}
