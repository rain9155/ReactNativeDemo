package com.rntextview;

import android.view.View;
import com.facebook.react.uimanager.SimpleViewManager;

public abstract class TextViewManagerSpec<T extends View> extends SimpleViewManager<T> {

  public abstract void setTextColor(Textview textView, String color);

  public abstract void setText(Textview textView, String text);
}
