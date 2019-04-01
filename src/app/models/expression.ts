
export class Expression {
    imageSource = '';
    width = 0;
    height = 0;
    type = 'expression';
    paramCount = 2;
    constructor(imageSource: any, width: any, height: any, type: any) {
        this.imageSource = imageSource;
        this.width = width;
        this.height = height;
        this.type = type;
        if (this.type === 'foo') {
            this.paramCount = 3;
        } else if (this.type === 'complex') {
            this.paramCount = 1;
        }
    }
}