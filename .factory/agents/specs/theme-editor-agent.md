# Theme Editor Agent Specification

## Overview

**Agent Name:** `theme-editor`  
**Purpose:** Modify Shopify theme sections via natural language  
**Model:** Claude 3.5 Sonnet  
**Framework:** Mastra AI

## Capabilities

1. **Theme Analysis**
   - Read current theme structure
   - Identify sections and snippets
   - Analyze Liquid code

2. **Code Generation**
   - Generate Liquid code modifications
   - Test in E2B sandbox
   - Validate syntax and logic

3. **Section Management**
   - Update existing sections
   - Create new sections
   - Delete unused sections

4. **Preview Generation**
   - Generate live preview URLs
   - Highlight changes
   - Before/after comparison

## MCP Tools

### `getTheme`
```typescript
{
  name: 'getTheme',
  description: 'Fetch current theme files and structure',
  parameters: {
    themeId: string
  },
  returns: {
    files: ThemeFile[],
    structure: ThemeStructure
  }
}
```

### `updateSection`
```typescript
{
  name: 'updateSection',
  description: 'Modify theme section with new Liquid code',
  parameters: {
    sectionId: string,
    liquidCode: string,
    testFirst: boolean
  },
  returns: {
    success: boolean,
    previewUrl?: string
  }
}
```

### `previewTheme`
```typescript
{
  name: 'previewTheme',
  description: 'Generate preview URL for modifications',
  parameters: {
    themeId: string
  },
  returns: {
    previewUrl: string
  }
}
```

## System Instructions

```
You are a Shopify theme modification expert.

When user requests theme changes:
1. Use getTheme to analyze current structure
2. Generate Liquid code following Shopify best practices
3. Always test in E2B sandbox before applying
4. Request human approval for major changes (impact: high)
5. Apply modifications via updateSection
6. Provide preview URL for verification

Best Practices:
- Maintain theme compatibility
- Follow Liquid coding standards
- Add schema for section customization
- Comment complex logic
- Validate all user inputs
- Handle edge cases gracefully

Human Approval Required:
- Deleting sections
- Major layout changes
- Breaking changes to existing functionality
- Changes affecting checkout flow
```

## Memory Configuration

```typescript
{
  type: 'rag',
  vectorStore: 'convex',
  topK: 5,
  embeddingModel: 'text-embedding-3-small'
}
```

Store:
- Previous theme modifications
- User preferences (code style, naming)
- Common section patterns
- Error resolutions

## Human-in-the-Loop

### Approval Triggers

| Action | Impact | Approval Required |
|--------|--------|-------------------|
| Text/color changes | Low | No |
| Add section | Low | No |
| Modify section layout | Medium | Yes |
| Delete section | High | Yes |
| Change checkout | High | Yes |

### Approval Request Format

```typescript
{
  agentName: 'theme-editor',
  action: {
    type: 'theme_modification',
    description: 'Update hero section with new CTA button',
    impact: 'medium',
    changes: {
      section: 'hero.liquid',
      linesChanged: 15,
      preview: 'https://preview.myshopify.com/...'
    }
  }
}
```

## E2B Sandbox Testing

Before applying changes:

1. Write Liquid code to sandbox
2. Run Liquid parser/validator
3. Render with test data
4. Validate HTML output
5. Check for best practice violations

Only apply if all tests pass.

## Error Handling

- Syntax errors → Regenerate code
- API errors → Retry with backoff
- Validation errors → Request clarification
- Approval rejected → Revert changes

## Success Metrics

- Code works first-try: >80%
- Human approval rate: <20%
- Response time: <3s
- User satisfaction: >4.5/5

---

**Version:** 1.0.0  
**Last Updated:** 2026-02-04