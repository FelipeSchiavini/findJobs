const get7DaysBeforeToday = (): Date => {
    const sevenDaysBefore = new Date();
    sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);
    return sevenDaysBefore;
};
 
export const isNewPostingDate = (stringDate: string) => {
    const date = new Date(stringDate)
    if (date > get7DaysBeforeToday()){
        return true
    }
    console.log('date', date)
    console.log('newDate', get7DaysBeforeToday())
    return false
}

export const twoDigit = (num: number): string => `0${num}`.slice(-2);

export const parseDateToShortString = (date: Date): string => {
    const day = twoDigit(date.getDate());
    const month = twoDigit(date.getMonth() + 1);
    const year = date.getFullYear()
        return `${day}/${month}/${year}`;
};



