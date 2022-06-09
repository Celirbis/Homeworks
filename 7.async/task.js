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
		this.alarmCollection.foreach((item) => console.log(`id: ${item.id}; time: ${item.time}`));
	}

	start() {
		if (!this.timerId) {
			const checkAllAlarms = () => this.alarmCollection.foreach((item) => this.checkClock(item));
			this.timerId = setInterval(checkAllAlarms, 9000);
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