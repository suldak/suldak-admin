export const commonColor = {
  primary: "#1677ff",
  primaryHover: "#4096ff",

  green: "#60d083",
  yellow: '#f1d953',
  red: '#e45066'
}

/** 다크 모드 테마 */
export const darkTheme = {
  ...commonColor,
  bgColor: "#1e222d",
  componentBgColor: "#262b3a",
  boxShadow: 'none',
  hoverColor: "#303744",

  // 텍스트 색상
  text: {

    primary: "#EFF2F7",
    secondary: "#919BAE",
  },

  // 강조용 색상
  utils: {
    accent: "#1E88E5",
    accentHover: "#1A78D1",
    error: "FF6B6B",
    errorHover: "#E65C5C",
    success: "#81C784",
    successHover: "#74B475"
  },

  // 폼 색상
  form: {
    border: 'rgba(255, 255, 255, 0.25)'
  }
}

/** 라이트 모드 테마 */
export const lightTheme = {
  ...commonColor,
  bgColor: "#F2EDF3",
  componentBgColor: "#F4F4F4",
  boxShadow: '10px 10px 15px 2px #bac1ce',
  hoverColor: "#C0C0C0",

  text: {
    primary: "#343A40",
    secondary: "#505D69",
  },

  utils: {
    accent: "#007BFF",
    accentHover: "#0068E6",
    error: "#D9534F",
    errorHover: "#C24845",
    success: "#5CB85C",
    successHover: "#53A753"
  },

  form: {
    border: '#dee2e6'
  }
}


export const theme = {
  lightTheme, darkTheme
}