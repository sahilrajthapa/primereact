import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class FieldsetDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Fieldset} from 'primereact/fieldset';

export class FieldsetDemo extends Component {

    render() {
        return (
            <div>
                <Fieldset legend="Godfather I">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </Fieldset>

                <br />

                <Fieldset legend="Godfather I" toggleable={true}>
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </Fieldset>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {Fieldset} from 'primereact/fieldset';

const FieldsetDemo = () => {

    return (
        <div>
            <Fieldset legend="Godfather I">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Fieldset>

            <br />

            <Fieldset legend="Godfather I" toggleable={true}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Fieldset>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Fieldset} from 'primereact/fieldset';

const FieldsetDemo = () => {

    return (
        <div>
            <Fieldset legend="Godfather I">
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Fieldset>

            <br />

            <Fieldset legend="Godfather I" toggleable={true}>
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Fieldset>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Fieldset} from 'primereact/fieldset';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Panel is a container component that accepts content as its children.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Fieldset legend="Godfather I">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Fieldset>

`}
                        </CodeHighlight>

                        <p>Instead of simple strings, <i>legend</i> propery also can be used to provide custom content as JSX.</p>

                        <h3>Toggleable</h3>
                        <p>Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option. A toggleable fieldset can either be used as a Controlled or Uncontrolled component.</p>

                        <p>In controlled mode, <i>collapsed</i> and <i>onToggle</i> properties need to be defined to control the collapsed state.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Fieldset legend="Godfather I" toggleable={true} collapsed={this.state.panelCollapsed} onToggle={(e) => this.setState({panelCollapsed: e.value})}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Fieldset>

`}
                        </CodeHighlight>

                        <p>In uncontrolled mode, only <i>toggleable</i> property needs to be enabled. Initial state can be still be provided using the <i>collapsed</i> property in uncontrolled mode however
            it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the collapsed state, prefer to use the component as controlled.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Fieldset legend="Godfather I" toggleable={true} >
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Fieldset>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>legend</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Header text of the fieldset.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>toggleable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified, content can toggled by clicking the legend.</td>
                                    </tr>
                                    <tr>
                                        <td>collapsed</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines the default visibility state of the content.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onCollapse</td>
                                        <td>event.originalEvent: Browser event </td>
                                        <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                                    </tr>
                                    <tr>
                                        <td>onExpand</td>
                                        <td>event.originalEvent: Browser event </td>
                                        <td>Callback to invoke when a tab gets expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onToggle</td>
                                        <td>event.originalEvent: browser event <br />
                                event.value: Collapsed state as a boolean
                            </td>
                                        <td>Callback to invoke when a tab gets expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onClick</td>
                                        <td>event Browser event </td>
                                        <td>Callback to invoke when fieldset is clicked.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-fieldset</td>
                                        <td>Fieldset element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-toggleable</td>
                                        <td>Toggleable fieldset element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-legend</td>
                                        <td>Legend element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-fieldset-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="FieldsetDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
