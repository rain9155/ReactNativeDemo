package com.rntextview;

import android.view.View;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.RNTextviewManagerDelegate;
import com.facebook.react.viewmanagers.RNTextviewManagerInterface;

public abstract class TextViewManagerSpec<T extends View> extends SimpleViewManager<T> implements RNTextviewManagerInterface<T> {
  
  private final ViewManagerDelegate<T> mDelegate;

  public TextViewManagerSpec() {
    mDelegate = new RNTextviewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<T> getDelegate() {
    return mDelegate;
  }
}
