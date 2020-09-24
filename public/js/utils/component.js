define(['babel-standalone', 'http-vue-loader'], function (Babel, httpVueLoader) {
    httpVueLoader.scriptExportsHandler = function (script) {
        return new Promise(function (resolve) {
            require([ this.component.name ], function (component) {
                resolve(component.default);
            });
        }.bind(this));
    };

    httpVueLoader.langProcessor.babel = function (script) {
        return Babel.transform(script, {
            moduleId: this.name,
            presets: [
                'es2015',
                'stage-3',
            ],
            plugins: [
                'transform-es2015-modules-amd',
            ],
        }).code;
    };

    return {
        load: function (name, req, onload, config) {
            var d = new Date();
            httpVueLoader(req.toUrl(name) + '.vue?v=' + d.getTime(), name)().then(onload);
        },
    };
});