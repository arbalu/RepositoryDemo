var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var course_service_1 = require('../services/course.service');
var CourseComponent = (function () {
    function CourseComponent(courseService) {
        this.title = 'The title of the course';
        this.courses = courseService.getCourse();
    }
    CourseComponent = __decorate([
        core_1.Component({
            selector: "course",
            template: "<h2>courses</h2>\n                {{title}}\n                <ul>\n                    <li *ngFor=\"#cur of courses\">\n                    {{cur}}\n                    </li>\n                </ul>\n                "
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseComponent);
    return CourseComponent;
})();
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map