export = tonal_index;

declare function tonal_index(): void;

declare namespace tonal_index {
  interface Result {
    root: string;
    notes: string[];
    type: string;
  }

  namespace chords {
    function all(): Result[];

    function by(k: any, v: any): void;

    function each(): void;
  }

  namespace notes {
    function all(...args: any[]): any;

    namespace all {
      function clear(): void;
    }
  }

  namespace scales {
    function all(): void;

    function by(k: any, v: any): void;

    function each(): void;
  }
}
