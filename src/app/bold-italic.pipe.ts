import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldItalic'
})
export class BoldItalicPipe implements PipeTransform {

  transform(value: string, font_weight: any): string {
    let result = value;

    if (font_weight === 'bold') {
      result = `<b>${value}</b>: `;
    }

    return result;
  }
}
