import { PromptType } from "../@generated/graphql/graphql";

export type InjectPezzoProps<TSettings> = TSettings & {
  pezzo: Prompt<TSettings>;
};

type PrompContent =
  | { prompt: string }
  | { messages: { role: "user" | "assistant"; content: string }[] };

export type GetPromptResult<TSettings = unknown> = {
  pezzo: Prompt<TSettings>;
};

export interface Prompt<TSettings = unknown> {
  promptId: string;
  promptVersionSha: string;
  type: PromptType;
  settings: TSettings;
  content: PrompContent;
  interpolatedContent: PrompContent;
  providerName?: string;
}

export interface ReportPromptExecutionResult<TResult> {
  id: string;
  promptId: string;
  status: PromptExecutionStatus;
  result?: TResult;
  totalCost: number;
  totalTokens: number;
  duration: number;
}

export interface TestPromptResult {
  success: boolean;
  result?: string;
  error: string | null;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  promptCost: number;
  completionCost: number;
  totalCost: number;
  duration: number;
  content: string;
  interpolatedContent: string;
  settings: any;
  variables: Record<string, boolean | number | string>;
}

export interface IntegrationBaseSettings<T> {
  model: string;
  modelSettings: T;
}

export enum PromptExecutionStatus {
  Success = "Success",
  Error = "Error",
}
