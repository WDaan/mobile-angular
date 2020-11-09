import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

    private languages: String[] = []

    constructor() {
        var context = require.context("codemirror/mode", true, /\.js$/);
        var obj = {};
        let _langs = []
        context.keys().forEach(function (key) {
            obj[key] = context(key);
            let match = key.match(/(\/[\w+-]+)/)[0].substring(1)
            _langs.push(match)
        });
        this.languages = _langs
    }

    public getLanguages() {
        return this.languages
    }
}