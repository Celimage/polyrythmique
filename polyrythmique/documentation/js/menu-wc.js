'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">polyrythmique documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-67c16900c5d4fe8ff8dcff0989501618"' : 'data-target="#xs-components-links-module-AppModule-67c16900c5d4fe8ff8dcff0989501618"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-67c16900c5d4fe8ff8dcff0989501618"' :
                                            'id="xs-components-links-module-AppModule-67c16900c5d4fe8ff8dcff0989501618"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateTrackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateTrackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExportMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExportMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeasureComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetronomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetronomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetronomeSoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetronomeSoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaybarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaybarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RhythmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RhythmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaveMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaveMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignatureComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoundPlayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoundPlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TempoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TempoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddOn.html" data-type="entity-link">AddOn</a>
                            </li>
                            <li class="link">
                                <a href="classes/Measure.html" data-type="entity-link">Measure</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link">Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoteRepresentation.html" data-type="entity-link">NoteRepresentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Signature.html" data-type="entity-link">Signature</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tempo.html" data-type="entity-link">Tempo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Track.html" data-type="entity-link">Track</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});