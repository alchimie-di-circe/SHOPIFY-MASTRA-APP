// Template for creating new Mastra agents
// Follow official docs: https://mastra.ai/docs

import { Agent } from '@mastra/core';
import { z } from 'zod';

/**
 * Agent Configuration Template
 * 
 * Replace placeholders with actual values:
 * - AGENT_NAME: kebab-case name (e.g., 'theme-editor')
 * - AGENT_DESCRIPTION: Brief description of agent purpose
 * - INSTRUCTIONS: Detailed system prompt
 * - TOOLS: Object with MCP tools
 */

export const agentTemplate = new Agent({
  name: 'AGENT_NAME',
  
  // Model configuration
  model: {
    provider: 'ANTHROPIC',
    name: 'claude-3-5-sonnet-20241022',
    toolChoice: 'auto'
  },
  
  // System instructions
  instructions: `
You are a [AGENT_DESCRIPTION].

When user requests [PRIMARY_TASK]:
1. [STEP_1]
2. [STEP_2]
3. [STEP_3]
4. Request human approval if needed
5. [FINAL_STEP]

Best Practices:
- [PRACTICE_1]
- [PRACTICE_2]
- [PRACTICE_3]

Human Approval Required:
- [HIGH_IMPACT_ACTION_1]
- [HIGH_IMPACT_ACTION_2]
  `,
  
  // MCP Tools
  tools: {
    // Import from /src/lib/tools/
    // toolName: toolImplementation
  },
  
  // Memory configuration (optional)
  // memory: {
  //   type: 'rag',
  //   vectorStore: 'convex',
  //   topK: 5
  // }
});

// Export typed interface
export type AgentTemplateName = typeof agentTemplate;

/**
 * Usage Example:
 * 
 * import { agentTemplate } from '@/lib/agents/template';
 * 
 * const result = await agentTemplate.generate(
 *   'User request here',
 *   { stream: true }
 * );
 */
