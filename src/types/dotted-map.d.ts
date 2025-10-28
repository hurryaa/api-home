declare module "dotted-map" {
  interface DottedMapOptions {
    height: number;
    grid?: "vertical" | "diagonal" | "horizontal";
  }

  interface GetSvgOptions {
    radius?: number;
    color?: string;
    shape?: "circle" | "square";
    backgroundColor?: string;
  }

  export default class DottedMap {
    constructor(options: DottedMapOptions);
    getSVG(options: GetSvgOptions): string;
  }
}
