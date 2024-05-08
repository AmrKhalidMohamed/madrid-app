function calculateDaysBetweenDates(begin, end) {
      const beginDate = new Date(begin);
      const endDate = new Date(end);
      return Math.floor((endDate - beginDate) / (1000 * 60 * 60 * 24));
      }
