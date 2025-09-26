declare module "animejs" {
  type AnimeExport = ((...args: unknown[]) => unknown) & Record<string, unknown>;
  const anime: AnimeExport;
  export default anime;
}

declare module "animejs/lib/anime.es.js" {
  type AnimeExport = ((...args: unknown[]) => unknown) & Record<string, unknown>;
  const anime: AnimeExport;
  export default anime;
}
