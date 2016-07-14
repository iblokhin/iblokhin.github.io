define(
    'model',
    [],
    function () {
        function Model(data) {
            var self = this;

            self.data = data;

            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }

                self.data.push(item);

                return self.data;
            };

            self.removeItem = function (item) {
                var index = self.data.indexOf(item);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            };

            self.itemEditIndex = function (item) {
                var index = self.data.indexOf(item);

                if (index === -1) {
                    return;
                }

                return index;
            };

            self.changeItem = function (text, index) {
                if (text === '') {
                    return;
                }

                self.data[index] = text;

                return self.data;
            };

        }

        var firstToDoList = ['HTML', 'CSS', 'Java-script'];
        var model = new Model(firstToDoList);
        return model;
    }
);