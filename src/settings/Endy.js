import ArenaBG from "../assets/arena_bg.jpg";
import LoaderBG from "../assets/loader_bg.jpg";

const EndymionSettings = {
    enableFullmap: null, // init null
    enableTab3: null,
    exTabCount: 0,
    specAssistType: "none",
    enableMaouCircle: false,
    HSLOCircleForOnlyMe: false,
    enableRainbowBorder: false,
    enableFoodDrawLimit: true,
    enableParticles: false, 
    enableEatEffects: false,
    enableDisappearFade: false,
    Toast: null, // toast func
    minimapClass: null,

    defaultLoaderImage: LoaderBG,
    defaultBGImage: ArenaBG,

    enableCellShadow: false,
};

export default EndymionSettings;