const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const normalizedBasePath =
  basePath && basePath !== "/" ? `/${basePath.replace(/^\/+|\/+$/g, "")}` : "";

export function publicAsset(path: string) {
  if (!path) return normalizedBasePath || "/";
  if (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBasePath}${normalizedPath}`;
}
