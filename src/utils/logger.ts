export class Logger {
  public static fatal(message: string): void {
    console.error(message);
  }

  public static error(message: string): void {
    console.error(message);
  }

  public static warn(message: string): void {
    console.warn(message);
  }

  public static info(message: string): void {
    console.info(message);
  }

  public static debug(message: string): void {
    console.debug(message);
  }

  public static trace(message: string): void {
    console.trace(message);
  }
}

