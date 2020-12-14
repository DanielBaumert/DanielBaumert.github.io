import { 
    MainContainer, 
    ContentContainer, 
    Section,
    Table,
    TableRowHeader, 
    TableConstRow 
} from "../../components";

export default () => (
    <MainContainer nav={["Syntax", "Parameter", "Return Value"]}>
        <ContentContainer>
            <h1 id="Screen-function">Screen</h1>
            <p></p>
            <Section title="Syntax">
                <pre className="hljs">
                    <code>
                        <div>
                            <span>
                                <span className="hljs-function">
                                <span className="hljs-keyword">typedef struct</span><span className="hljs-params">{"{"}<br/>
                                
                                }<span className="hljs-title">Screen;</span></span>
                            </span>;</span>
                        </div>
                    </code>
                </pre>
            </Section>
            <Section title="Parameter">
            </Section>
            <Section title="Return value">
            </Section>
            <Section title="Requirements">
            <hr/>
            </Section>
            <Table>
                <TableRowHeader cols={"", ""}/>
                <TableConstRow title="Header" desc="windef.h (include Windows.h)"/>
            </Table>
        </ContentContainer>
    </MainContainer>
);