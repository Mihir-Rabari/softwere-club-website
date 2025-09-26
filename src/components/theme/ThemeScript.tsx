export default function ThemeScript() {
  const code = `!function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.setAttribute("data-theme","light")}else{document.documentElement.removeAttribute("data-theme")}}catch(e){}}()`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
