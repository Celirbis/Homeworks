class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {

		if (!id) {
			throw new Error('Необходимо добавить идентификатор звонка');
		}

		for (const alarm of this.alarmCollection) {
			if (alarm.id === id) {
				console.error('Такой звонок уже есть!');
				return false;
			}
		}

		this.alarmCollection.push({id, time, callback});
		return true;
	}

	removeClock(id) {
		let previousLength = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id != id);
		if (this.alarmCollection.length === previousLength) {
			return false;
		}
		return true;
	}

	getCurrentFormattedTime() {
		let now = new Date();
		return `${now.getHours()}:${now.getMinutes()}`;
	}

	checkClock(alarm) {
		if (alarm.time === this.getCurrentFormattedTime()) {
			alarm.callback();
		}
	}

	printAlarms() {
		this.alarmCollection.forEach((item) => console.log(`id: ${item.id}; time: ${item.time}`));
	}

	start() {
		if (!this.timerId) {
			const checkAllAlarms = () => this.alarmCollection.forEach((item) => this.checkClock(item));
			this.timerId = setInterval(checkAllAlarms, 4000);
		}
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}

function testCase() {
	const testAlamSet = new AlarmClock();
	let currentTime = new Date();  
	let time1 = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
	currentTime = new Date(currentTime.getTime() + 60000);
	let time2 = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
	currentTime = new Date(currentTime.getTime() + 60000);
	let time3 = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

	const callback1 = () => console.log(`Выполнение первого будильника (должен выполниться несколько раз)`);
	testAlamSet.addClock(time1, callback1, 1);

	const callback2 = () => {
		console.log(`Выполнение второго будильника (должен выполниться один раз и самоудалиться)`);
		testAlamSet.removeClock(2);
	}
	testAlamSet.addClock(time2, callback2, 2);

	const callback3 = () => {
		console.log(`Выполнение третьего будильника. Он должен выполниться один раз и удалить все звонки, после чего выводит все звонки (ничего не выводит).`);
		testAlamSet.clearAlarms();
		testAlamSet.printAlarms();
	}
	testAlamSet.addClock(time3, callback3, 3);

	console.log(`Cписок звонков:`);
	testAlamSet.printAlarms();

	console.log(`Запуск звонков:`);
	testAlamSet.start();
}

testCase();

