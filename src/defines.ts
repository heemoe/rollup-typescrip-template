class Cat {
  constructor(a: any, b: string) {
    this.a = a;
    this.b = b;
  }
  private a: any;
  private b: string;

  /**
   * test get A
   */
  public getA() {
    return this.a;
  }

  /**
   * test get B
   */
  public getB() {
    return this.b;
  }
}

export class Animals extends Object {
  /**
   * show
   */
  public showName() {
    const obj = new Cat("aaa", "bbb");
    console.log(obj);

    console.log(obj.getA());
    console.log(obj.getB());
  }
}
