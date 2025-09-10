import { tryRegisterDiagram, diagramRegistry  } from "../utils/diagramRegistry";
import { createFlexibleDiagram } from "../utils/diagramFactory";
import { getMainDiagramNodes } from "./nodesMain";
import { mainDiagramEdges } from "./edgesMain";
import type { FlexibleDiagramConfig, DiagramFactoryOptions } from "../data/flow-types";
import type { IntlShape } from "react-intl";

export function registerMain(intl: IntlShape): void {
   if (diagramRegistry["root"]) {
    delete diagramRegistry["root"];
  }
  tryRegisterDiagram("root", () => {
    console.log("AKTION: Registriere Main Diagram (root)...");

    const config: FlexibleDiagramConfig = {
      nodes: getMainDiagramNodes(intl),
      edges: mainDiagramEdges,
    };

      const options: DiagramFactoryOptions = {
      defaultNodeType: 'custom',
      defaultEdgeType: 'floating',
    };

    createFlexibleDiagram("root", config, options);
  });
}