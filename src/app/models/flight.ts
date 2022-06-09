export class Flight {
  constructor(
    public origin: string = '',
    public destination: string = '',
    public departure: string = '',
    public returnDate: string = '',
    public adult: number = 1,
    public children: number = 0,
    public infant: number = 0
  ) {}

  getDate(date: string) {
    if (date) return new Date(date).getTime();
    return '';
  }
}
