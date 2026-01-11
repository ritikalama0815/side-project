import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
import matplotlib as mpl

def add_box(ax, x, y, w, h, title, body="", fc="#f7f7f7", ec="#333333",
            title_size=13, body_size=12, rounding=0.06, lw=2):
    box = FancyBboxPatch(
        (x, y), w, h,
        boxstyle=f"round,pad=0.02,rounding_size={rounding}",
        linewidth=lw, edgecolor=ec, facecolor=fc
    )
    ax.add_patch(box)

    ax.text(x + w/2, y + h*0.72, title, ha="center", va="center",
            fontsize=title_size, fontweight="bold", family="sans-serif")

    if body:
        ax.text(x + w/2, y + h*0.36, body, ha="center", va="center",
                fontsize=body_size, family="serif")

def arrow(ax, x1, y1, x2, y2):
    ax.annotate(
        "", xy=(x2, y2), xytext=(x1, y1),
        arrowprops=dict(arrowstyle="->", lw=2, color="#111111")
    )

def generate_proposed_methodology_figure(save_path="proposed_methodology.png"):
    mpl.rcParams["figure.dpi"] = 160

    fig, ax = plt.subplots(figsize=(14, 6))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")

    y = 0.55
    h = 0.18

    # Boxes (positions tuned to look like your figure)
    w1, x1 = 0.16, 0.06
    w2, x2 = 0.16, 0.26
    w3, x3 = 0.30, 0.46
    w4, x4 = 0.18, 0.80
    w5, x5 = 0.13, 0.96  # offscreen start; will shift below

    # Input image placeholder
    add_box(ax, 0.00, y - h/2, 0.05, h,
            "Input\nImage", "", fc="#ffffff", ec="#666666", title_size=11, lw=2)

    # E2Net block
    add_box(
        ax, x1, y - h/2, w1, h,
        "E2Net\nExcitation",
        r"$\hat{E}=\max(X,U)$",
        fc="#dbeafe", ec="#3b82f6", title_size=14, body_size=13
    )

    # scSE block
    add_box(
        ax, x2, y - h/2, w2, h,
        "scSE\nAttention",
        r"$U_{sSE}+U_{cSE}$",
        fc="#fde7c7", ec="#f59e0b", title_size=14, body_size=13
    )

    # MobileNet block (larger)
    add_box(
        ax, x3, y - 0.28, w3, 0.56,
        "MobileNetV3-Small\nBackbone",
        r"$Y_d=X*K_d$" + "\n" + r"$Y=Y_d*K_p$" + "\n\n" + r"$Y=P(D(E(X)))$",
        fc="#d1fae5", ec="#16a34a", title_size=16, body_size=14, rounding=0.05
    )

    # Pooling + classification
    add_box(
        ax, x4, y - h/2, w4, h,
        "Global Pooling\n& Classification",
        r"$\mathrm{GAP} \rightarrow \mathrm{FC}$",
        fc="#ede9fe", ec="#7c3aed", title_size=13, body_size=12
    )

    # Output block (shifted inside canvas)
    out_x = 0.93
    out_w = 0.07
    add_box(
        ax, out_x, y - h/2, out_w, h,
        "Output",
        "Cancer\n\nNon Cancer",
        fc="#ffe4e6", ec="#b45309", title_size=13, body_size=12
    )

    # Arrows
    arrow(ax, 0.05, y, x1, y)
    arrow(ax, x1 + w1, y, x2, y)
    arrow(ax, x2 + w2, y, x3, y)
    arrow(ax, x3 + w3, y, x4, y)
    arrow(ax, x4 + w4, y, out_x, y)

    # Title
    ax.text(0.5, 0.10, "Proposed Methodology", ha="center", va="center",
            fontsize=22, fontweight="bold", family="sans-serif", color="#0f172a")

    plt.tight_layout()
    plt.savefig(save_path, bbox_inches="tight")
    plt.close(fig)
    print("Saved:", save_path)

if __name__ == "__main__":
    generate_proposed_methodology_figure("proposed_methodology.png")
