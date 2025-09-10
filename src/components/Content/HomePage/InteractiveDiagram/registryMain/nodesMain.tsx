import type { DiagramNodeConfig } from "../data/flow-types";
import type { IntlShape } from "react-intl";
import {
  Atom,
  FlaskConical,
  Shuffle,
  Network,
  ListTodo,
  Lightbulb,
} from "lucide-react";

export const getMainDiagramNodes = (
  intl: IntlShape
): DiagramNodeConfig[] => [
    {
    id: "xdukte",
    data: {
      icon: <Atom size={24} />,
      label: intl.formatMessage({ id: "xdukte_label", defaultMessage: "Xdukte" }),
      description: intl.formatMessage({
        id: "xdukte_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "xdukte-node",
  },
  {
    id: "konversionsverfahren",
    data: {
      icon: <FlaskConical size={24} />,
      label: intl.formatMessage({
        id: "konversionsverfahren_label",
        defaultMessage: "Konversionsverfahren"
      }),
      description: intl.formatMessage({
        id: "konversionsverfahren_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "konversion-node",
  },
    {
    id: "mix",
    data: {
      icon: <Shuffle size={24} />,
      label: intl.formatMessage({ id: "mix_label", defaultMessage: "Mix" }),
      description: intl.formatMessage({
        id: "mix_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "mix-node",
  },
  {
    id: "prozessketten",
    data: {
      icon: <Network size={24} />,
      label: intl.formatMessage({
        id: "prozessketten_label",
        defaultMessage: "Prozessketten"
      }),
      description: intl.formatMessage({
        id: "prozessketten_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "prozessketten-node",
  },
  {
    id: "versorgungsaufgaben",
    data: {
      icon: <ListTodo size={24} />,
      label: intl.formatMessage({
        id: "versorgungsaufgaben_label",
        defaultMessage: "Versorgungsaufgaben"
      }),
      description: intl.formatMessage({
        id: "versorgungsaufgaben_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "versorgungsaufgaben-node",
  },
  {
    id: "versorgungskonzepte",
    data: {
      icon: <Lightbulb size={24} />,
      label: intl.formatMessage({
        id: "versorgungskonzepte_label",
        defaultMessage: "Versorgungskonzepte"
      }),
      description: intl.formatMessage({
        id: "versorgungskonzepte_description",
        defaultMessage: "Klick für mehr Details."
      }),
    },
    className: "versorgungskonzepte-node",
  },
];