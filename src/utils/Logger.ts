import { macaronColors } from './Color.ts';

const ConsoleColorMap: { [key in __CONFIG__LOG__TYPE__]: string } = {
  log: `color: #000000`,
  info: `color: ${macaronColors.lavender}`,
  warn: `color: ${macaronColors.blueberry}`,
  error: `color: ${macaronColors.raspberry}`,
  debug: `color: ${macaronColors.rose}`,
};

export class Logger {
  private readonly name: string;
  private readonly opt: boolean | __CONFIG__LOG__TYPE__[];

  constructor(name?: string, options: __CONFIG__LOG__ = true) {
    this.name = name || 'SFOS';
    this.opt = typeof options === 'string' ? [options] : options;
  }

  private printMessage(type: 'log' | 'info' | 'warn' | 'error' | 'debug', message: string, ...args: any[]) {
    if (Array.isArray(this.opt) && !this.opt.includes(type)) return false;
    if (!this.opt) return false;
    //
    console[type](`%c[${this.name}]%c ${message}`, `color: ${macaronColors.pistachio}`, ConsoleColorMap[type], ...args);
  }

  log(message: string, ...args: any[]) {
    this.printMessage('log', message, ...args);
  }

  info(message: string, ...args: any[]) {
    this.printMessage('info', message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.printMessage('warn', message, ...args);
  }

  error(message: string, ...args: any[]) {
    this.printMessage('error', message, ...args);
  }

  debug(message: string, ...args: any[]) {
    this.printMessage('debug', message, ...args);
  }
}

export default new Logger();
