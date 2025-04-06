// lib/push-utils.ts
export function toPrismaExpiration(exp: number | null): Date | null {
    return exp !== null ? new Date(exp) : null;
  }
  
  export function toWebPushExpiration(date: Date | null): number | null {
    return date !== null ? date.getTime() : null;
  }