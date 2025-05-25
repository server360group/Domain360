class ChatBubble extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        this.chatbotURL = this.getAttribute('chatbot-url') || '';
        this.aiName = this.getAttribute('ai-name') || 'Janus AI';
        this.position = this.getAttribute('position') || 'bottom-right';

        const isLeft = this.position.toLowerCase() === 'bottom-left';

        this.shadowRoot.innerHTML = `
        <div class="chatbubble-widget-container ${isLeft ? 'left' : 'right'}" id="widget">
            <div class="chatbubble-header">
                ${this.aiName}
                <button class="chatbubble-close-btn" id="closeBtn">&times;</button>
            </div>
            <iframe class="chatbubble-frame" src="${this.chatbotURL}"></iframe>
        </div>
        <button class="chatbubble-launcher ${isLeft ? 'left' : 'right'}" id="launcher">💬</button>
        <style>
            chat-bubble {
                all: initial;
            }

            .chatbubble-widget-container {
                position: fixed;
                bottom: 20px;
                width: 350px;
                height: 500px;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                border-radius: 16px;
                overflow: hidden;
                display: none;
                flex-direction: column;
                background: white;
                z-index: 9999;
            }

            .chatbubble-widget-container.right {
                right: 20px;
            }

            .chatbubble-widget-container.left {
                left: 20px;
            }

            .chatbubble-header {
                background: #1a1a1a;
                color: white;
                padding: 10px 16px;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .chatbubble-close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
            }

            .chatbubble-launcher {
                position: fixed;
                bottom: 20px;
                background-color: #1a1a1a;
                color: white;
                border: none;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 9998;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }

            .chatbubble-launcher.right {
                right: 20px;
            }

            .chatbubble-launcher.left {
                left: 20px;
            }

            iframe.chatbubble-frame {
                flex: 1;
                border: none;
                width: 100%;
                height: 100%;
            }
        </style>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('launcher').addEventListener('click', () => this.toggleChat());
        this.shadowRoot.getElementById('closeBtn').addEventListener('click', () => this.toggleChat());
    }

    toggleChat() {
        const widget = this.shadowRoot.getElementById('widget');
        this.isOpen = !this.isOpen;
        widget.style.display = this.isOpen ? 'flex' : 'none';
    }
}

customElements.define('chat-bubble', ChatBubble);